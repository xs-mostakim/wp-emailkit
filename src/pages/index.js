import { Provider } from 'react-redux'
import store from "../rtk/app/store";
import EditorContainer from "./Editor";

const App = () => {

  return (
    <Provider store={store}>
      <EditorContainer />
    </Provider>
  );
};

export default App;