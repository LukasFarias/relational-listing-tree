export default function (data) {
  //TAG principal
  const tree = document.querySelector('nav#tree');
  
  //recebe toda árvore
  const menu = document.createElement('ul');

  const firstLevel = data.filter(item => (item.parent === "#"));
  
  const getFirstLi = firstLevel.map(buildTree);

  getFirstLi.forEach( li => menu.append(li));

  
  function buildTree(item) {
    //primeiro elemento
    const li = document.createElement('li');
    //adicionar o primeiro elemento 
    li.append(item.text);
    
    const children = data.filter(child => child.parent === item.id);
      if (children.length > 0) {
        //adiciona um click para os parent
        li.addEventListener('click', event => {
          event.stopPropagation();
          event.target.classList.toggle('open');
        });

        //adiciona uma classe indentificador nos filhos
        li.classList.add('has-children');
        //constroi submenu dos filhos
        const subMenu = document.createElement('ul');
        
        children.map(buildTree).forEach(li => subMenu.append(li));
        
        li.append(subMenu);
        
      }

    //adiciona os elementos
    return li;
  }
  
  //adiciona a árvore no HTML
  tree.append(menu);
}