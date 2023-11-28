Feature: Add product

Scenario: add product the shopping cart  successfully
Given Cesar visits teststore.automationtesting.co.uk
When Cesar adds a product
Then Cesar should see the message 'Product successfully added to your shopping cart'

