# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!({user_name: "a", password: 'kencha', first_name: 'Ken', last_name: 'Cha', email: 'a@a.com'})
User.create!({user_name: "b", password: 'kencha', first_name: 'Roy', last_name: 'Jenkins', email: 'b@b.com'})
Photo.create!({user_id: 1, url: 'https://source.unsplash.com/random'})
Photo.create!({user_id: 1, url: 'https://source.unsplash.com/daily'})
Photo.create!({user_id: 1, url: 'https://source.unsplash.com/weekly'})
Photo.create!({user_id: 1, url: 'https://source.unsplash.com/category/nature/daily'})
Photo.create!({user_id: 1, url: 'https://source.unsplash.com/category/nature/weekly'})
Photo.create!({user_id: 1, url: 'https://source.unsplash.com/weekly?water'})
Photo.create!({user_id: 1, url: 'https://source.unsplash.com/weekly?fire'})
Photo.create!({user_id: 1, url: 'https://source.unsplash.com/daily?water'})
Photo.create!({user_id: 1, url: 'https://source.unsplash.com/daily?fire'})
Photo.create!({user_id: 1, url: 'https://source.unsplash.com/weekly?earth'})
Photo.create!({user_id: 1, url: 'https://source.unsplash.com/daily?earth'})
Photo.create!({user_id: 1, url: 'https://source.unsplash.com/weekly?dog'})
Photo.create!({user_id: 1, url: 'https://source.unsplash.com/daily?dog'})
Photo.create!({user_id: 1, url: 'https://source.unsplash.com/weekly?puppy'})
