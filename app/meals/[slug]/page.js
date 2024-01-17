export default function MealDetailPage ({params}) {
    return(
        <div> 
            <h1>Meal Details</h1>
            <div>{params.slug}</div>
        </div>
    )
}