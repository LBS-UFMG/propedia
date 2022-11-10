# propedia v2.3

Instalando:

git clone https://github.com/LBS-UFMG/propedia.git

    cd propedia
    composer install

    cp env .env
    nano .env

Faça as configurações necessárias (configure o ambiente de produção, banco de dados e url padrão)

Agora, mude as permissões de arquivos:
    sudo chown -R www-data:www-data *

## Migrando do CodeIgniter 3 para o 4

Copie os arquivos em ./app/models, ./app/controllers e app/views 
para as pastas correspondentes no CodeIgniter 4

Construa as rotas
Copie os arquivos em public

