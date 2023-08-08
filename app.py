from flask import Flask, render_template,request,jsonify, url_for
# from flask_cors  import CORS
from chat import get_response
app=Flask(__name__)

# CORS(app)

@app.route('/')
def index_get():
    return render_template('index.html')
# @app.get("/")

@app.route('/signUp')
def signUp():
    return render_template('signUp.html')

@app.route('/gitam')
def gitam():
    return render_template('gitam.html')

@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/ForgetPasswordPage')
def ForgetPasswordPage():
    return render_template('ForgetPasswordPage.html')

@app.route('/Notification')
def Notification():
    return render_template('Notification.html')

@app.route('/predict',methods=['GET','POST'])
def predict():
    text=request.get_json().get('message')
    response=get_response(text)
    message={"answer":response}
    return jsonify(message)

if __name__=="__main_":
    app.run(debug=True)
