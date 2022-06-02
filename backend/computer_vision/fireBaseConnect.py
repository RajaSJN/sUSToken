import pyrebase

config = { "apiKey": "AIzaSyBuG3ba837x2P3KPvcy_hsu8ZKLaG-AXn4",
  "authDomain": "sustoken.firebaseapp.com",
  "projectId": "sustoken",
  "storageBucket": "sustoken.appspot.com",
  "serviceAccount": "sustoken-firebase-adminsdk-d5cfw-916fa5f928.json",
   "databaseURL": "https://sustoken-default-rtdb.firebaseio.com",
  "messagingSenderId": "856929242603",
  "appId": "1:856929242603:web:718c7389cf78996e2c9dae",
  "measurementId": "G-08DSZ7FLE3"}


firebase_storage =  pyrebase.initialize_app(config)

storage = firebase_storage.storage()

value = storage.child("output.json")
print(type(value))
value.download("output.json")

