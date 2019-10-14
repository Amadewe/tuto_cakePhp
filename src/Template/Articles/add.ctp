<!-- Fichier : src/Template/Articles/add.ctp -->

<h1>Ajouter un article</h1>
<?php
    echo $this->Form->create($article);
    echo $this->Form->control('title');
    echo $this->Form->control('body', ['rows' => '3']);
    echo $this->Form->button(__('Sauvegarder l\'article'));
    echo $this->Form->end();
?>