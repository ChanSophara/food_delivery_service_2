from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
from datetime import datetime

app = Flask(__name__)
# Allow requests from http://127.0.0.1:5500
CORS(app, origins=["http://127.0.0.1:5500"])

# Initialize SQLite database with separate tables
def init_db():
    conn = sqlite3.connect("local_storage.db")
    cursor = conn.cursor()

    # Create Users table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fullName TEXT,
            phone TEXT,
            email TEXT,
            address TEXT
        )
    """)

    # Create OrderItem table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS OrderItem (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userId INTEGER,
            itemName TEXT,
            price REAL,
            quantity INTEGER,
            total REAL,
            FOREIGN KEY (userId) REFERENCES Users(id)
        )
    """)

    # Create Contact table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS Contact (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            phone TEXT,
            subject TEXT,
            message TEXT,
            date TEXT
        )
    """)

    # Create Login table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS Login (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT,
            password TEXT,
            date TEXT
        )
    """)

    conn.commit()
    conn.close()

init_db()  # Run database setup

# API to save order data
@app.route("/saveOrder", methods=["POST"])
def save_order():
    try:
        data = request.json
        user_data = data["user"]
        items = data["items"]
        total = data["total"]

        # Save user data to Users table
        conn = sqlite3.connect("local_storage.db")
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO Users (fullName, phone, email, address)
            VALUES (?, ?, ?, ?)
        """, (user_data["fullName"], user_data["phone"], user_data["email"], user_data["address"]))
        user_id = cursor.lastrowid  # Get the ID of the newly inserted user

        # Save order items to OrderItem table
        for item in items:
            cursor.execute("""
                INSERT INTO OrderItem (userId, itemName, price, quantity, total)
                VALUES (?, ?, ?, ?, ?)
            """, (user_id, item["name"], item["price"], item["qty"], item["price"] * item["qty"]))

        conn.commit()
        conn.close()

        return jsonify({"message": "Order saved successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# API to save contact data
@app.route("/saveContact", methods=["POST"])
def save_contact():
    try:
        data = request.json
        conn = sqlite3.connect("local_storage.db")
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO Contact (name, email, phone, subject, message, date)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (data["name"], data["email"], data["phone"], data["subject"], data["message"], datetime.now().isoformat()))
        conn.commit()
        conn.close()
        return jsonify({"message": "Contact data saved successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# API to save login data
@app.route("/saveLogin", methods=["POST"])
def save_login():
    try:
        data = request.json
        conn = sqlite3.connect("local_storage.db")
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO Login (email, password, date)
            VALUES (?, ?, ?)
        """, (data["email"], data["password"], datetime.now().isoformat()))
        conn.commit()
        conn.close()
        return jsonify({"message": "Login data saved successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# API to fetch all data (for debugging)
@app.route("/getData", methods=["GET"])
def get_data():
    try:
        conn = sqlite3.connect("local_storage.db")
        cursor = conn.cursor()

        # Fetch data from all tables
        cursor.execute("SELECT * FROM Users")
        users = cursor.fetchall()

        cursor.execute("SELECT * FROM OrderItem")
        order_items = cursor.fetchall()

        cursor.execute("SELECT * FROM Contact")
        contacts = cursor.fetchall()

        cursor.execute("SELECT * FROM Login")
        logins = cursor.fetchall()

        conn.close()

        return jsonify({
            "users": users,
            "order_items": order_items,
            "contacts": contacts,
            "logins": logins
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)