import os

from flask import Flask, render_template, request, redirect, jsonify, url_for
from flask_session import Session
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)

online= {}
channels = []


users = {}

@app.route("/")
def index():
	#if not logged in
	#redirect to log in
	return render_template("index.html", channels=channels)

@app.route("/login")
def login():
	if request.method == "GET":
		return render_template("login.html")
	else:
		name = request.form.get("displayName")
		if not name:
			return render_template("error.html", message="Invalid Display Name")

		#check if display name is not currently in system
		if name in users:
			return render_template("error.html", message="Username Already Online")

		users[name] = True

		#send javascript variable called login
		return render_template("index.html", users = users, channels=channels)

@app.route("/create", methods=["POST"])
def create():
	channel = request.form.get("channel")
	if not channel:
		return redirect(url_for('index', alert="Error! Invalid Channel! "))
	if channel in channels:
		return redirect(url_for('index', alert="Error! Channel Already exists!"))
	channels.append(channel)
	#return render_template("index.html", name=name, channels=channels)
	return redirect(url_for('index', alert="Success!"))

@app.route("/channel/<string:channel>")
def channel(channel):
	#
	return "TO DO"

