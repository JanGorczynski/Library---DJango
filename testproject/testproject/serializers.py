from rest_framework import serializers
from .models import Book
from .models import Author
from .models import Rent
from .models import User
from datetime import date

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ["fullName"]

class BookSerializer(serializers.ModelSerializer):

    author = serializers.SerializerMethodField()

    class Meta:
        model = Book
        fields = ['id','title','author','currentlyRented']


    def get_author(self, obj):
        return obj.author.fullName

class RentSerializer(serializers.ModelSerializer):

    bookTitle = serializers.SerializerMethodField()
    username = serializers.SerializerMethodField()
    author = serializers.SerializerMethodField()
    overdue = serializers.SerializerMethodField()

    class Meta:
        model = Rent
        fields = ['id','bookTitle','username','author','dateOfRenting','dateOfReturn','overdue']

    def get_bookTitle(self,obj):
        return obj.book.title
    
    def get_username(self,obj):
        return obj.user.username
    
    def get_author(self,obj):
        return obj.book.author.fullName
    
    def get_overdue(self,obj):
        if(obj.dateOfReturn < date.today()):
            return True
        else:
            return False
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','password']
