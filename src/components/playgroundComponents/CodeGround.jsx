import EditorNav from './codeEditorComps/Editornav'
import Editorfooter from './codeEditorComps/Editorfooter';


const CodeGround = () => {
  return (
    <div className='h-screen w-full' >
      <EditorNav />
      <div className='h-[85%] w-full bg-gray-900 bg-opacity-70' >
        hello
      </div>
      <Editorfooter/>
    </div>
  );
};

export default CodeGround;
