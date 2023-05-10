import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'testproject.settings')
django.setup()


from testproject.models import Book
from testproject.models import User
from testproject.models import Author

author1 = Author(fullName="J.R.R. Tolkien")
author2 = Author(fullName="Andrzej Sapkowski")
author3 = Author(fullName="George Orwell")


book1 = Book(title= "Lord Of The Rings",author = author1)
book2 = Book(title= "Hobbit",author = author1)

book3 = Book(title= "Withcher",author = author2)

book4 = Book(title= "1984",author = author3)
book5 = Book(title= "Animal Farm",author = author3)

user1 = User(username="Bob",password= "123")
user2 = User(username = "Tom",password = "321")
user3 = User(username = "Mary",password = "123321")

author2.save()
author3.save()
author1.save()

book1.save()
book2.save()
book3.save()
book4.save()
book5.save()

user1.save()
user2.save()
user3.save()

print("Data base initilized with objects")
