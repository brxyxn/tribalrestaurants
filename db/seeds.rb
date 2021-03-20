# Filling our database with some objects to test fuctionality

10.times do |i|
    Restaurant.create(
        name: "Restaurante #{i + 1}",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, consectetur. Ab excepturi quo eligendi magni quaerat nisi earum consectetur. Culpa rem blanditiis quos harum nesciunt sunt qui explicabo eaque corrupti."
    )
end