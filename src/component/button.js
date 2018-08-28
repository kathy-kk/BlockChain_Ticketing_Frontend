import { Button } from 'antd';
import { Buttons, ButtonsGroup } from './styles/utils/button.style';
import WithDirection from './styles/withDirection';

const AntButton = Buttons(Button);
const isoButton = WithDirection(AntButton);
const AntButtonGroup = ButtonsGroup(Button.Group);
const ButtonGroup = WithDirection(AntButtonGroup);

export default isoButton;
export { ButtonGroup };
