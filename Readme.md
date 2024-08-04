# Ecommerce Backend

This is a comprehensive backend solution for an e-commerce backend platform built using the MongoDB, Express.js, Node.js. The project incorporates several advanced features to enhance user experience and system functionality.

Features
- User Authentication and Authorization
    - User login and registration with secure password hashing.
    - TOTP (Time-based One-Time Password) for enhanced account security.

- Multilevel Product Categories
    - Organized product listings with support for multiple category levels.

- Product Comments and Ratings
    - Users can leave feedback and rate products.
- Order Management
    - Create and track orders efficiently.
- Payment Gateway Integration
    - Secure payment processing using Esewa and Khalti with transaction validation.
- Popular Product Tracking
    - Track trending products in real-time using Redis.
- Monitoring and Alerting
    - Comprehensive system monitoring with Prometheus, Loki, and Grafana.
- Containerization
    - Efficient deployment with Docker and Docker Compose.


## Getting Started

### Prerequisites

- NodeJS
- MongoDB
- Docker


### Installation

1. Clone the repository
    ```
    git clone https://github.com/raseeksht/ecommerce.git
    cd ecommerce
    ```

2. Install dependencies
    ```
    npm install
    ```

3. Configure environment variables

    rename .env.sample to .env and make necessary changes
    ```
    mv .env.sample .env
    ```
    get the credentials from cloudinary, redis (from redis.io) and khalti 

    - [Cloudinary](https://cloudinary.com)

    - [redis.io](https://redis.io)

    - [khalti](https://test-admin.khalti.com/)






4. Run the application
    ```
    npm run dev
    ```


### For Docker deployment

    
    sudo docker compose up --build -d
    




## Logs

- project initialization and setups + schema definitions
- registation and login controllers and validation middlewares
- fieldValidator middleware ,included roles in validateUser middleware,product conrollers
- setup loki, product ratings
- presigned url for authenticated image upload from frontend, controllers for comments
- cart implementation with redis
- txn, coupons and order models with creating order controller
- order creation with details and payment validationan
- fetch the order information, cancel order and complete order controllers
- coupons for discount
- categories added, support for multilevel subcategories
- containerize loki and set stop perfoming product with redis
- khalti payment gateway integrated
