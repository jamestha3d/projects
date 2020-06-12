import os
import requests

from flask import Flask, render_template, request, redirect, jsonify, url_for
from flask_session import Session
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)

users = []
channels = []


@app.route("/")
def index():
	#if not logged in
	#redirect to log in		
	return render_template("index.html", channels=channels)

@app.route("/name", methods=["POST"])
def name():
	name = request.form.get("name")
	if name == '':
		return jsonify({"success": False})
	else:
		users.append(name)
		return jsonify({"success": True, "name": name})

@app.route("/channel/<string:info>")
def channel(info):
	#send information to reload page
	return render_template("channels.html")





@socketio.on("create channel")
def create_channel(data):
	channel = data["channel"]
	channels.append(channel)
	emit("channel created", {"channel": channel}, broadcast=True)

