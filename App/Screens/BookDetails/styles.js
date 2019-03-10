import { StyleSheet, Dimensions, Platform} from 'react-native'

const window = Dimensions.get('window');
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default{
  icon_back : {
      flex: 0.10, 
      justifyContent: 'center', 
      alignItems: 'center' 
    },

    color_white : { 
        color: 'white' 
    },

    title : { 
        flex: 0.90, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },

    book_image_container : { 
        height: deviceHeight/2.73, 
        width: deviceWidth, 
        justifyContent: 'center' 
    },

    book_image : {
        width: deviceWidth, 
        height: deviceHeight/3.42 
    },

    paddingHorizontal : {
        paddingHorizontal: 15
    },

    book_title : { 
        fontSize: 24, 
        textAlign: 'center' 
    },

    book_authors : { 
        fontSize: 18, 
        textAlign: 'center' 
    },

    book_subtitle : { 
        fontSize: 22, 
        textAlign: 'center', 
        paddingVertical: 10 
    },

    book_description : { 
        fontSize: 16, 
        paddingHorizontal: 10
    },

    book_rating : { 
        fontSize: 28,
        paddingVertical: 10, 
        paddingHorizontal: 10 
    }
};
