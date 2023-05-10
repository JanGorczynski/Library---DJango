from typing import Any
from django.db import models

class Author(models.Model):
    fullName = models.CharField(max_length=200)

    def __str__(self):
        return self.fullName

class Book(models.Model):

    title = models.CharField(max_length=200)
    author = models.ForeignKey(Author, on_delete= models.CASCADE)
    currentlyRented = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class User(models.Model):

    username = models.CharField(max_length=200)
    password = models.CharField(max_length=200)

    def __str__(self):
        return self.username    

class Rent(models.Model):

    user = models.ForeignKey(User,on_delete= models.CASCADE,null=True)
    book = models.ForeignKey(Book,on_delete= models.CASCADE,null=True)
    dateOfRenting = models.DateField()
    dateOfReturn = models.DateField()

    def __str__(self):
        return self.user.username + " " + self.book.title
    
