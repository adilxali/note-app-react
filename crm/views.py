from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .forms import SignUpForm, AddRecordForm
from .models import Record

# Create your views here.


def home(request):
    records = Record.objects.all()

    # check to see if logging in
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        # Authenticate user
        user = authenticate(request, username=username, password=password)
        # If user is found
        if user is not None:
            login(request, user)
            messages.success(request, ("You have been logged in!"))
            return redirect("home")
        else:
            messages.success(request, ("Error logging in - please try again"))
            return redirect("home")
    else:
        return render(request, "home.html", {"records": records})


def logout_user(request):
    logout(request)
    messages.success(request, ("You have been logged out!"))
    return redirect("home")


def register_user(request):
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            # get username and password
            username = form.cleaned_data["username"]
            password = form.cleaned_data["password1"]
            # authenticate user then login
            user = authenticate(request, username=username, password=password)
            login(request, user)
            messages.success(request, ("You have been registered!"))
            return redirect("home")
    else:
        form = SignUpForm()
        return render(request, "register.html", {"form": form})
    return render(request, "register.html", {"form": form})


def record(request, pk):
    if request.user.is_authenticated:
        record = Record.objects.get(id=pk)
        return render(request, "record.html", {"record": record})
    else:
        messages.success(request, ("Please login to view record"))
        return redirect("home")


def delete_record(request, pk):
    if request.user.is_authenticated:
        record = Record.objects.get(id=pk)
        record.delete()
        messages.success(request, ("Record has been deleted"))
        return redirect("home")
    else:
        messages.success(request, ("Please login to delete record"))
        return redirect("home")


def add_record(request):
    form = AddRecordForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method == "POST":
            if form.is_valid():
                form.save()
                messages.success(request, ("Record has been added"))
                return redirect("home")
        return render(request, "add_record.html", {"form": form})
    else:
        messages.success(request, ("Please login to add record"))
        return redirect("home")


def update_record(request, pk):
    if request.user.is_authenticated:
        record = Record.objects.get(id=pk)
        form = AddRecordForm(instance=record)
        if request.method == "POST":
            form = AddRecordForm(request.POST or None, instance=record)
            if form.is_valid():
                form.save()
                messages.success(request, ("Record has been updated"))
                return redirect("home")
        return render(request, "update_record.html", {"form": form})
    else:
        messages.success(request, ("Please login to update record"))
        return redirect("home")
