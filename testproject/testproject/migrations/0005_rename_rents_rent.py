# Generated by Django 4.1 on 2023-05-06 16:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('testproject', '0004_rents_book_rents_user_alter_book_currentlyrented'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Rents',
            new_name='Rent',
        ),
    ]
