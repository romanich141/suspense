import React, { Suspense } from 'react';
import { Posts } from './Posts';
import { useResourse } from './resourses';

const resourse = useResourse();

function App() {
  return (
    <div className="App">
      <Suspense fallback={<span>Loading</span>}>
        <Posts resourse={ resourse } />>
      </Suspense>
    </div>
  );
}

export default App;
