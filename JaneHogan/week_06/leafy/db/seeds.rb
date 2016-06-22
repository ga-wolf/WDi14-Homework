# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#
# create_table :entities do |t|
#   t.text :name
#   t.integer :ACN
#   t.text :address
#   t.text :contact
#   t.integer :contact_number
#   t.text :contact_email
#

Entity.destroy_all
e1 = Entity.create({ name: 'blob', ACN: 12345, address: 'somewhere', contact: 'Johnny', contact_number: 9876, contact_email: 'Johnny@blob' })
e2 = Entity.create({ name: 'Astral', ACN: 111111, address: 'everywhere', contact: 'Luna', contact_number: 9999999, contact_email: 'luna@astral' })

Obligation.destroy_all

ob1 = Obligation.create ({agreement_name: 'Business Purchase Agrement', agreement_date:31011967})
ob2 = Obligation.create ({agreement_name: 'License Agrement', agreement_date:31011967})
ob3 = Obligation.create ({agreement_name: 'Business Sale Agrement', agreement_date:31011967})
ob4 = Obligation.create ({agreement_name: 'Shareholders Agrement', agreement_date:31011967})


e1.obligations << ob1 << ob2
e1.obligations << ob2 << ob3
e2.obligations << ob3 << ob4


Clause.destroy_all

cl1 = Clause.create({name: "Sale", description: "performative"})
cl2 = Clause.create({name: "Purchase", description: "performative"})
cl3 = Clause.create({name: "Warranty", description: "protective"})
cl4 = Clause.create({name: "Sale", description: "protective"})
cl4 = Clause.create({name: "Conditions precedent", description: "performative"})

Task.destroy_all

t1 = Task.create({description: "Get the coffee", date: "23/12/2220"})
t1 = Task.create({description: "Send the notice to say you really want them to give you the goods on time", date: "23/15/2008"})
t1 = Task.create({description: "Pay the first instalment of the purchase price", date: "23/12/2017"})
t1 = Task.create({description: "Check that all the things they said they would do before you get the business, have actually been done", date: "23/12/2220"})


User.destroy_all

u1 = User.create({name: "Joe Blogs", entity_id: 19})
u1 = User.create({name: "Jane Blogs", entity_id: 20})
