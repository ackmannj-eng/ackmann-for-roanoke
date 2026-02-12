import './pages.css'

export default function Priorities() {
  return (
    <section className="priorities max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl mb-4">Priorities</h2>
      <p className="priorities-text ">If elected, I will:</p>
      <ul className="priorities-list list-image-[url(../assets/Check.png)]">
        <li>Connect Fairway Ranch to Roanoke's network of sidewalks to create a unified community for our families</li>
        <li>Build a bridge from Roanoke Skate Park to Byron Nelson Blvd. so everyone can safely walk to enjoy dinner on Oak Street</li>
        <li>Keep property taxes low and only spend money when it is fiscally prudent</li>
        <li>Vote against new multifamily developments so Roanoke can grow in a responsible way</li>
        <li>Vote against new warehouses to keep Roanoke's small-town feel</li>
      </ul>
    </section>
  )
}
