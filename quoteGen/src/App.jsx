import { Title, Quotes, Qwrapper, NameQ} from "./Comps"
export default function App(){
  return(
    <div className="backG">
      <Title/>
        <Qwrapper>
          <Quotes/>
          <NameQ/>
        </Qwrapper>
    </div>
  )
}