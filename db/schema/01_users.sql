-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS users CASCADE;

DROP TABLE IF EXISTS products CASCADE;

DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE
  users (
    id serial PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL,
    wishlist JSONB,
    messages JSONB,
    profile JSONB
  );

CREATE TABLE
  products (
    id serial PRIMARY KEY,
    sellerId INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2),
    category VARCHAR(255),
    images VARCHAR(255),
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (sellerId) REFERENCES users (id)
  );

CREATE TABLE
  messages (
    id serial PRIMARY KEY,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    message_text TEXT,
    send_date TIMESTAMP
    WITH
      TIME ZONE,
      FOREIGN KEY (sender_id) REFERENCES users (id),
      FOREIGN KEY (receiver_id) REFERENCES users (id)
  );
