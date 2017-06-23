# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Photo.create({user_id: 1, url: 'https://source.unsplash.com/random', subject: "Random", name: "Random Unplash Picture"})
Photo.create({user_id: 1, url: 'https://source.unsplash.com/daily', subject: "Random", name: "Random Unplash Picture"})
Photo.create({user_id: 1, url: 'https://source.unsplash.com/weekly', subject: "Random", name: "Ken's Picture"})
Photo.create({user_id: 1, url: 'https://source.unsplash.com/category/nature/daily', subject: "Random", name: "Ken's Picture"})
Photo.create({user_id: 1, url: 'https://source.unsplash.com/category/nature/weekly', subject: "Random", name: "Ken's Picture"})
Photo.create({user_id: 1, url: 'https://source.unsplash.com/weekly?water', subject: "Random", name: "Babe's Picture"})
Photo.create({user_id: 1, url: 'https://source.unsplash.com/weekly?fire', subject: "Random", name: "Babe's Picture"})
Photo.create({user_id: 1, url: 'https://source.unsplash.com/daily?water', subject: "Random", name: "Babe's Picture"})
Photo.create({user_id: 1, url: 'https://source.unsplash.com/daily?fire', subject: "Random", name: "IDK's picture"})
Photo.create({user_id: 1, url: 'https://source.unsplash.com/weekly?earth', subject: "Random", name: "IDK's picture"})
Photo.create({user_id: 1, url: 'https://source.unsplash.com/daily?earth', subject: "Random", name: "IDK's picture"})
Photo.create({user_id: 1, url: 'https://source.unsplash.com/weekly?dog', subject: "Random", name: "Cool Picture"})
Photo.create({user_id: 1, url: 'https://source.unsplash.com/daily?dog', subject: "Random", name: "Cool Picture"})
Photo.create({user_id: 1, url: 'https://source.unsplash.com/weekly?puppy', subject: "Random", name: "Cool Picture"})
