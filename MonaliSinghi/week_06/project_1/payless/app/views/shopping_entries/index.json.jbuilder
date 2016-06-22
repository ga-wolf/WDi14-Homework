json.array!(@shopping_entries) do |shopping_entry|
  json.extract! shopping_entry, :id, :product_id, :quantity
  json.url shopping_entry_url(shopping_entry, format: :json)
end
