from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from .models import Book
from .models import Rent
from .models import User
from .serializers import BookSerializer
from .serializers import RentSerializer
from .serializers import UserSerializer
from datetime import date, timedelta
from rest_framework.decorators import api_view

@api_view(['GET'])
def getAvailableBooks(request):
    books = Book.objects.filter(currentlyRented=False)
    serializer = BookSerializer(books,many= True)
    return Response(serializer.data,status=200)

@api_view(['GET','POST'])
def rentController(request):
    if request.method == 'GET':
        username = request.GET.get('username')
        rents = Rent.objects.filter(user__username = username)
        print(rents)
        serializer = RentSerializer(rents,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        bookId =  int(request.GET.get('book_id'))
        userId =  int(request.GET.get('user_id'))
        print("book_id ", bookId," uerId ",userId)
        try:
            book = Book.objects.get(id=bookId)

            user = User.objects.get(id=userId)
            
            if(book.currentlyRented):
                return Response(status=409)
            book.currentlyRented = True
            rent = Rent(user = user, book = book, dateOfRenting = date.today(), dateOfReturn = date.today() + timedelta(days=31))
            book.save()
            rent.save()
            serializer = RentSerializer(rent)
            return Response(serializer.data,status=201)
        except :
            return Response(status=405)
        

@api_view(['PATCH'])
def prolongRent(request):
    try:
        rentId = request.GET.get('id')
        rent = Rent.objects.get(id=rentId)
        rent.dateOfReturn += timedelta(days=31)
        rent.save()
        return Response(status=200)
    except :
        return Response(status=404)

@api_view(['DELETE'])
def deleteRent(request):
    try:
        rentId = request.GET.get('id')
        rent = Rent.objects.get(id=rentId)
        book = rent.book
        book.currentlyRented = False
        book.save()
        rent.delete()
        return Response(status=200)
    except: 
        return Response(status=404)
    
@api_view(['POST'])
def addUser(request):
    try:
        username = request.GET.get('username')
        password = request.GET.get('password')
        if User.objects.filter(username=username).exists():
            raise
        user = User(username=username,password=password)
        user.save()
        serializer = UserSerializer(user)
        return Response(serializer.data,status=201)
    except:
        return Response(status=409)
    
@api_view(['GET'])
def getUser(request):
    try:
        username = request.GET.get('username')
        user = User.objects.get(username=username)
        serializer = UserSerializer(user)
        return Response(serializer.data)
    except:
        return Response(status=404)