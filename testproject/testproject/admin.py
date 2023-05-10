from django.contrib import admin
from .models import Book
from .models import User
from .models import Rent

from .models import Author


@admin.register(Book)
class PersonAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'author','currentlyRented')

@admin.register(User)
class PersonAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'password')

@admin.register(Rent)
class PersonAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'book','dateOfRenting','dateOfReturn')

@admin.register(Author)
class PersonAdmin(admin.ModelAdmin):
    list_display = ('id', 'fullName')