import { useMemo } from "react"

export function FilteredList({list}){

 const listMemo = useMemo(() => list,[list])

 return (
  <>
  {listMemo.map((e,i) => e.age > 18 && <div key={i}>{e.name}</div>)}
  </>
 )
}