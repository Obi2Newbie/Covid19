import React from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) =>{
    let backgroundColor;
    backgroundColor =  selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)' ;
    return(
        <View
          style = {{
              
              width: 6,
              height: 6,
              marginHorizontal: 3,
              backgroundColor
          }}
        />
    )
}
const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) =>{
    return(
        <Onboarding
        containerStyles={{
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        SkipButtonComponent = {Skip}
        NextButtonComponent = {Next}
        DoneButtonComponent = {Done}
        DotComponent = {Dots}
        onSkip={() => navigation.navigate("LoginScreen")}
        onDone={() => navigation.navigate("LoginScreen")}

        pages={[
        {
      backgroundColor: '#a6e4d0',
      image: <Image source={require('../image/im1.jpg')} />,
      title: 'Luttons ensemble contre le covid-19',
      subtitle: 'La COVID-19 est la maladie associée au syndrome respiratoire aigu sévère à coronavirus de type 2 (SRAS-CoV-2). Le SRAS-CoV-2 est une nouvelle souche de coronavirus qui n’avait pas été identifiée chez l’homme avant décembre 2019. Il existe différents types de coronavirus et, bien qu’ils circulent essentiellement parmi les animaux, certains peuvent également infecter les humains.',
       },
       {
        backgroundColor: '#a6e4d0',
        image: <Image source={require('../image/22.png')} />,
        title: 'comment se transmet la COVID-19 ?',
        subtitle: 'Le virus se transmet principalement par des gouttelettes et aérosols respiratoires en cas d’éternuements, de toux ou d’interaction avec d’autres personnes situées à proximité immédiate (généralement moins de deux mètres). Ces gouttelettes peuvent être inhalées ou se déposer sur des surfaces avec lesquelles d’autres personnes peuvent entrer en contact, ce qui risque de contaminer celles-ci lorsqu’elles se touchent le nez, la bouche ou les yeux.',
         },
         {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../image/im99.jpg')} />,
            title: 'Quels sont les symptômes de la COVID-19?',
            subtitle: 'Les degrés de sévérité de la COVID-19 vont de l’absence totale de symptômes (patients asymptomatiques) jusqu’aux symptômes suivants: fièvre, toux, maux de gorge, modification ou perte du goût, faiblesse général, diarrhée, fatigue, douleurs musculaires',
             },
           {
                backgroundColor: '#a6e4d0',
                image: <Image source={require('../image/sary7.png')} />,
                title: 'Comment prévenir la COVID-19?',
                subtitle: 'Les vaccins destinés à prévenir la COVID-19 sont devenus disponibles pour la première fois dans l’UE/EEE fin décembre 2020. Il est recommandé de garder une distance physique (d’au moins un mètre ou, idéalement, deux mètres) vis-à-vis des autres personnes dans les lieux publics, et d’éviter les grands rassemblements afin de réduire le risque d’infection par les gouttelettes respiratoires.',
                 },
                 {
                 backgroundColor: '#a6e4d0',
                    image: <Image source={require('../image/im44.jpg')} />,
                    title: 'Pour empêcher la propagation de la COVID-19, suivez ces recommandations :',
                    subtitle: 'Lavez-vous fréquemment les mains. Utilisez du savon et de leau ou une solution hydroalcoolique.',
                     },
                     {
                        backgroundColor: '#a6e4d0',
                           image: <Image source={require('../image/im66.jpg')} />,
                           title: 'Suivez ces recommandations :',
                           subtitle: 'En cas de toux ou d éternuement, couvrez-vous le nez et la bouche avec le pli du coude ou avec un mouchoir. L’éternuement peut ainsi propager des microbes sur 1 à 6 mètres à la vitesse de 50 kilomètres à l’heure.  N’importe qui se trouvant sur la trajectoire d’un éternuement ou d’une toux peut aspirer ces microbes et être infecté',
                           
                        
                        },

                        {
                            backgroundColor: '#a6e4d0',
                               image: <Image source={require('../image/rim101.jpg')} />,
                               title: 'Suivez ces recommandations :',
                               subtitle: 'POURQUOI FAUT-IL ÉVITER DE SE TOUCHER LE VISAGE :Les yeux et la bouche sont les portes d’entrée du virus. Pour ne pas vous contaminer évitez de vous touchez le visage. Si vous fumez ou vous rongez les ongles soyez d’autant plus vigilants aux mesures d’hygiène. Même avec des gants les mains véhiculent le virus. ',
                               
                            
                            },

                            {
                                backgroundColor: '#a6e4d0',
                                   image: <Image source={require('../image/dista.jpg')} />,
                                   title: 'Suivez ces recommandations :',
                                   subtitle: 'la distanciation physique portée à 2 mètres: Pour limiter la propagation des variants du coronavirus plus contagieux, la distance physique entre deux personnes est portée de 1 mètre à 2 mètres en l absence de port du masque.',
                                   
                                
                                },

                                {
                                    backgroundColor: '#a6e4d0',
                                       image: <Image source={require('../image/salue1.jpg')} />,
                                       title: 'Suivez ces recommandations :',
                                       subtitle: 'Saluer sans serrer la main, pas d’embrassades,  Il est demandé de se saluer d’un signe de la tête ou de la main, ou encore en vous inclinant.En effet, le contact des mains est un important vecteur de contamination. Le port du masque en tissu peut contribuer à freiner la propagation du Covid-19, mais uniquement s’il est correctement mis, enlevé, lavé et conservé.',
                                       
                                    
                                    },
                   
               
           
    
                 
    
  ]}
/>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'flex-start',
        justifyContent: 'center',
        
    },
    image : {
        flex : 0.7,
        justifyContent: 'center'
    },
    
});
export default OnboardingScreen;

