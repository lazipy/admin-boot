// Components
import Animate from './packages/animate/main';
import Alert from './packages/alert/main';
import Avator from './packages/avator/main';
import Affix from './packages/affix/main';
import Backtop from './packages/backtop/main';
import Badge from './packages/badge/main';
import Bar from './packages/bar/main';
import Breadcrumb from './packages/breadcrumb/main';
import BreadcrumbItem from './packages/breadcrumb/item';
import Button from './packages/button/main';
import ButtonGroup from './packages/button/group';
import DropdownButton from './packages/button/dropdown';
import Card from './packages/card/main';
import Carousel from './packages/carousel/main';
import CarouselItem from './packages/carousel/item';
import Collapse from './packages/collapse/main';
import CollapseItem from './packages/collapse/item';
import CollapseAnimate from './packages/collapse/animate';
import Col from './packages/col/main';
import Divider from './packages/divider/main';
import Dropdown from './packages/dropdown/main';
import DropdownMenu from './packages/dropdown/menu';
import DropdownItem from './packages/dropdown/item';
import Icon from './packages/icon/main';
import List from './packages/list/main';
import ListItem from './packages/list/item';
import Loading from './packages/loading/main';
import Row from './packages/row/main';
import Tooltip from './packages/tooltip/main';
import Popover from './packages/popover/main';
import Spinner from './packages/spinner/main';

// Directives
import Transfer from './directives/transfer';
import ChildEvent from './directives/child-event';
import OutClick from './directives/out-click';
import VLoading from './directives/loading';

const components = [
  Animate,
  Alert,
  Avator,
  Affix,
  Backtop,
  Badge,
  Bar,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  DropdownButton,
  Card,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  CollapseAnimate,
  Row,
  Col,
  Divider,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  List,
  ListItem,
  Loading,
  Icon,
  Tooltip,
  Popover,
  Spinner
];

const install = (Vue) => {
  components.map(component => {
    Vue.component(component.name, component);
  });

  Vue.directive('transfer', Transfer);
  Vue.directive('child-event', ChildEvent);
  Vue.directive('out-click', OutClick);
  Vue.directive('loading', VLoading);
};

export default {
  install,
  Animate,
  Alert,
  Avator,
  Backtop,
  Badge,
  Bar,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  DropdownButton,
  Card,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  CollapseAnimate,
  Row,
  Col,
  Divider,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  List,
  ListItem,
  Loading,
  Icon,
  Tooltip,
  Popover,
  Spinner
};
