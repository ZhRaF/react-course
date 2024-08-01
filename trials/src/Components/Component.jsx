import {react , useState,useCallback} from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

function Component() {
  const [age, setAge] = useState(20)
  const [salary, setSalary] = useState(100000)

  const incrementSalary = useCallback(
    ()=>setSalary(salary=>salary+1)
  ,[salary])

  const incrementAge = useCallback(
    ()=>setAge(age=>age+1)
  ,[age])


  return (
    <>
    <Title/>
    <Count content='age is' value={age}/>
    <Button handleClick={incrementAge} />
    <Count content='salary is' value={salary}/>
    <Button  handleClick={incrementSalary}/> 
    </>
  )
}

export default Component
// a component re-renders if its props change
// when a parent componenet re-renders its child elements will re-render too.
// useMemo is used to memoize the component (it won't be re-rendered unless its props are changed)
// when the component re-renders , the functions inside it are assigned new refernces ,so the components that have them
// as props , are considered to have new props thats why they will re rendered 
// to adress this situation ,we use
// useCallback hook  , which will preserve the references of these functions unless the state (it works with )
//  has changed (meaning that we need to pass them as dependencies.)
