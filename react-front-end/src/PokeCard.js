import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}))

export default function PokeCard({ pokemon }) {
  const pokeName = { ...pokemon.name }
  const types = pokemon.type
  const { HP, Attack, Defense, Speed } = { ...pokemon.base }
  console.log(types)

  return (
    <Item>
      <Typography variant="h5" component="div">
        {pokeName.english}
      </Typography>
    </Item>
  )
}

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5" component="div">
//           {pokeName.english}
//         </Typography>

//         {/* <h1>{names.english}</h1> */}
//         {types.map((t) => {
//           return (
//             <Button key={t} label={t}>
//               {t}{' '}
//             </Button>
//           )
//         })}

//         <p>{Speed}</p>
//       </CardContent>
//     </Card>
//   )
// }
