import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { PropTypes } from 'prop-types';
import { Grid, Text, Spacer, Loading } from '@nextui-org/react';

export const GifGrid = ({ category }) => {
  const { images, isLoading} = useFetchGifs(category);


  return (
    <>
      <Spacer y={1}/>
      <Text h2 size={20}  weight="bold">Search results for:</Text>
      <Text css={{ color: '$green600'}}> {category}</Text>
      <Spacer y={1}/>
      {
        isLoading && <Grid css={{justifyContent:'center', display:'flex'}}>
          <Loading size="lg" color="success" type="points" />
        </Grid>
      }
      <Grid.Container gap={2} justify="center">
        {
          images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))
        }
      </Grid.Container>
      <Spacer y={1}/>
    </>
  )
}

GifGrid.protoType = {
  category: PropTypes.string.isRequired
}