# Generated by Django 2.0.5 on 2018-06-05 17:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0038_auto_20180606_0256'),
    ]

    operations = [
        migrations.AlterField(
            model_name='page',
            name='slug',
            field=models.SlugField(default=1528221528.2128007, max_length=20, unique=True),
        ),
    ]
