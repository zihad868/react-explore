
export default function Country({country}) {
  const {name, flags} = country;
  console.log(country, flags);
  return (
    <div>
        <div>Name: {name.common}</div>
        <img src={flags.png} alt="" />
    </div>
  )
}
