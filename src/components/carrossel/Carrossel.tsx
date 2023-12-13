import { Text, View, StyleSheet, TouchableOpacityProps, ImageBackground} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import bullets from '../../services/bullets';
import ImageFundo from '../../../assets/paisagem.jpg';

type Props = {
    data: Pokemon[];
  } & TouchableOpacityProps
  

export default function Carrossel({data, ...rest} : Props){
    const poke = data.map((item) =>{
        return item
    })

    return(
        <View>
            <Carousel
                containerCustomStyle={{overflow: 'visible' }}
                data={poke}
                renderItem={({item}) =>{
                        return(
                          <View style={styles.itemView}>
                            <ImageBackground source = {ImageFundo} style={styles.backgroundImg} blurRadius={2} borderRadius={35}>
                            <Text style={styles.imgText}>{item.name}</Text>
                            </ImageBackground>
                          </View>
                        )
                      }}

                inactiveSlideOpacity={0.75} // opacidade de itens inativos
                inactiveSlideScale={0.77} // tamanho dos itens inativos
                sliderWidth={400} // tamanho do slide
                itemWidth = {200} // tamanho do item
                slideStyle={{display: 'flex'}}               
            />
        </View>
    );
}

const styles = StyleSheet.create({
    itemView: {
        width: 200,
        height: 300,
        borderRadius: 20,
        marginTop: 40,
    },
    backgroundImg: {
        flex: 1,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgText: {
        color: 'white',
        fontSize: 20,
        padding: 10,
    },
});