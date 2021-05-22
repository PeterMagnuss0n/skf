import React from 'react';
import './App.css';


 interface menuItem{
  name: string;
  children: menuItem[];
  open: boolean;
}


const treeData =[
  {
    name: "Some node 1",
    open: false,
    children: [
      {
        name: "some node 1.1",
        open: false,
        children: [
          {
            name: 'Some node 1.1.1',
            open: false,
            children: [],
          }
        ],
      } as menuItem,
      {
        name: "some node 1.2",
        open: false,
        children: [],
      } as menuItem,
      {
        name:"Some node 1.3",
        children:[
          {
              "name":"Some node 1.3.1"
          } as menuItem
        ]
      } as menuItem,
      {
        name:"Some node 1.4",
        open: false,
        children: [],
      } as menuItem
    ]
  } as menuItem,
  {
    name: "Some node 2",
    open: false,
    children: [],
  } as menuItem
 ]

function expandNode(item: menuItem): any {
  item.open = !item.open;
  console.log(item.name, item.open);
}

function expandItem(i: number) {
  treeData[i].open = !treeData[i].open;
}

function App() {
  return (
    <div>
      <div className="Header">My App</div>
      <div className="SideBar">
        <ul>
          {treeData.map((item, i) => (
          <li key={ i } onClick={() => expandNode(item)}>
            {item.name} {item.open + ''}
            
            {item.children.length > 0 &&
              <ul className={`${item.open ? "isOpen" : "isClosed"}`}>
                {item.open}
                {item.children.map((child) => (
                  <li onClick={() => expandNode(child)}>
                    {child.name} | {child.open}

                    {child.children.length > 0 &&
                      <ul className={`${child.open ? "isOpen" : "isClosed"}`}>
                        {child.children.map((grandchild) => (
                          <li onClick={() => expandNode(grandchild)}>
                              {grandchild.name} | {grandchild.open}               
                          </li>
                        ))}
                      </ul>
                    }
                  </li>
                ))}
              </ul>
            }
          </li>
          ))}
        </ul> 
      </div>
    
    </div>
  );
}

export default App;
