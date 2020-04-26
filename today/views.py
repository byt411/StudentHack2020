from django.shortcuts import render
from django.http import HttpResponse
import apicalls as api
import pycountry
import requests
import json

# Create your views here.

def countryStats(request, country):
    args = {}
    args['confirmed'], args['critical'], args['deaths'], args['recovered'] = api.getCases(country)
    args['country'] = country.title()
    return render(request, 'country.html', args)

def index(request):
    with open('countries.txt') as f:
        countries = [tuple(map(str, i.split(','))) for i in f]
    args = {}
    args['countries'] = countries
    return render(request, 'index.html', args)

def manifest(request):
    return render(request, 'manifest.json')


def test(request):
    return render(request, 'test.html')


def saved(request):
    return render(request, 'saved.html')
