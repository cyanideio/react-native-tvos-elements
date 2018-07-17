import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

export default class Icon extends Component<Props> {
    render() {
        const { iconType, iconName, iconAlign, iconStyle } = this.props;
        const iconMap = {
            Ionicons,              
            FontAwesome,
            Entypo,
            EvilIcons,
            Feather,
            Foundation,
            MaterialCommunityIcons,
            MaterialIcons,
            Octicons,
            SimpleLineIcons,
            Zocial,
        }
        if (!iconType) { return null }
        var SpecificIcon = iconMap[iconType];
        return  (
            <SpecificIcon style={[
                tvStyle.BtnIcon,
                absoluteAlign(iconAlign), 
                iconStyle,
            ]} 
            name={iconName} />)
    }
}
