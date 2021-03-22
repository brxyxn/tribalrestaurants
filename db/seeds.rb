# Filling our database with some objects to test fuctionality

7.times do |i|
    Restaurant.create(
        name: "Restaurant #{i + 1}",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, consectetur. Ab excepturi quo eligendi magni quaerat nisi earum consectetur. Culpa rem blanditiis quos harum nesciunt sunt qui explicabo eaque corrupti."
    )
end

2.times do |i|
    Comment.create(
        username: "User #{i + 1}",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurant_id: 1
    )
end
4.times do |i|
    Comment.create(
        username: "User #{i + 1}",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurant_id: 3
    )
end
3.times do |i|
    Comment.create(
        username: "User #{i + 1}",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurant_id: 5
    )
end
8.times do |i|
    Comment.create(
        username: "User #{i + 1}",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurant_id: 7
    )
end