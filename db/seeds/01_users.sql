-- Users table seeds here (Example)
-- Drop and recreate Users table (Example)
-- Users table seeds here (Example)
-- Insert sample data
INSERT INTO
  users (
    username,
    email,
    password,
    role,
    wishlist,
    messages,
    profile
  )
VALUES
  (
    'user1',
    'user1@gmail.com',
    'password1',
    'buyer',
    '{}',
    '{}',
    '{"name": "John Doe"}'
  ),
  (
    'user2',
    'user2@gmail.com',
    'password2',
    'seller',
    '{}',
    '{}',
    '{"name": "Alice Smith"}'
  ),
  (
    'john_doe',
    'john.doe@example.com',
    'hashed_password_1',
    'seller',
    '{"item1": "Product A", "item2": "Product B"}',
    '{"from": "seller", "message": "Interested in your item."}',
    '{"name": "John Doe", "bio": "A passionate buyer."}'
  ),
  (
    'jane_smith',
    'jane.smith@example.com',
    'hashed_password_2',
    'buyer',
    '{"item1": "Product C", "item2": "Product D"}',
    '{"from": "buyer", "message": "Is this item available?"}',
    '{"name": "Jane Smith", "bio": "Loves shopping."}'
  );
