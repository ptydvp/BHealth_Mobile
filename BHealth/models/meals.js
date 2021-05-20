class Meals {
    constructor (
        id,
        categoryIds,
        title,
        ingredients,
        step,
        calories,
        imageUrl,
        bloodgroup,
    ) {
        this.id = id,
        this.categoryIds = categoryIds,
        this.title = title,
        this.ingredients = ingredients,
        this.step = step,
        this.calories = calories,
        this.imageUrl = imageUrl,
        this.bloodgroup = bloodgroup
    }
}

export default Meals;