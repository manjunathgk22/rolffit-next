rm -r out/

npm install

npm run build

npm run export

aws s3 cp out/ s3://www.rolf.fit/ --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --recursive

aws s3 cp out/ s3://rolf.fit/ --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --recursive

aws cloudfront create-invalidation --distribution-id  E2CNVWEOPPNRPF --paths "/*"

aws cloudfront create-invalidation --distribution-id  E16YEIOTF03SKE --paths "/*"