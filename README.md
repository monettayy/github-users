## Tech Stack


Backend: [Laravel 8](https://laravel.com/docs/8.x/readme)

Frontend: [VueJS v3](https://vuejs.org/)


## Getting Started


### Install from repository

Clone the repository:

    git clone https://github.com/monettayy/github-users.git

Navigate to the directory and run:

    composer install

Copy the example .env file:

    cp .env.example .env

Generate an application key:

    php artisan key:generate

View the website:

    php artisan serve
    
### Setup Database

Create your MySQL Database,
Go to the .env File and put your database credentials
    
    DB_DATABASE=your-database-here
    DB_USERNAME=root
    DB_PASSWORD=
    

In your terminal run:
    
    php artisan migrate
    php artisan db:seed

*This is to seed the sample admin login credentials

To login in the website, use this seeded credentials or register an account:
    
    useraname:  admin
    password:   secret


## Testing

Registration and Login
![Registration and Login](external/gifs/registration.gif)


**Demo**
![Demo](external/gifs/demo.gif)

Logs for API and Redis Request
![Logs](external/images/request-logs.PNG)

Database Design for Users
![Database](external/images/database.PNG)

