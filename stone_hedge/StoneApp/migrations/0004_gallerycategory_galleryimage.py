# Generated by Django 5.1.3 on 2024-12-16 08:16

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('StoneApp', '0003_alter_contactinquiry_options'),
    ]

    operations = [
        migrations.CreateModel(
            name='Gallerycategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(default='heading', max_length=50)),
                ('image', models.ImageField(default='', upload_to='gallery-cat/')),
            ],
            options={
                'verbose_name': 'Category',
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='GalleryImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='gallery/')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='StoneApp.gallerycategory')),
            ],
        ),
    ]