INSERT INTO
  messages (sender_id, receiver_id, message_text, send_date)
VALUES
  (
    1,
    2,
    'Hi, I''m interested in your Product 1. Can you provide more details?',
    '2023-09-11 10:30:00'
  ),
  (
    2,
    1,
    'Sure, here are the details...',
    '2023-09-11T10:30:00Z'
  ),
  (3, 1, 'Test', '2023-09-11 11:00:00'),
  (1, 3, 'Sent', '2023-09-11 12:28:00'),
  (2, 3, 'Sent', '2023-09-11 16:30:00');
