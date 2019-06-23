var express = require('express'),
	partials = require('express-partials'),
	app = express(),
	routes = require('./routes');

app.set('view engine', 'ejs');
app.set('view options', {defaultLayout: 'layout'});

app.use(partials());
app.use(express.static(__dirname+ '/static', { maxage: '30d' }));

app.get('/', routes.index);
app.get('/company/about', routes.about);
app.get('/company/contact', routes.contact);
app.get('/login', routes.login);
app.get('/signup', routes.signup);
app.get('/terms-services', routes.terms);
app.get('/privacy', routes.privacy);
app.get('/documentation', routes.documentation);
app.get('/help', routes.help);
app.get('/resources/product-brouchers', routes.productBrouchers);
app.get('/support-center', routes.supportCenter);
app.get('/create-ticket', routes.createTicket);
app.get('/blog', routes.blogList);
app.get('/blog/:uname', routes.blogList);
app.get('/blog-detail/:uname', routes.blogSingle);

app.get('/company/newsletter', routes.newsLetter);
app.get('/company/news-events', routes.newsEvents);

app.get('/products', routes.products);

app.get('/products/provisioning-suite', routes.provisioningSuite);
app.get('/products/phone-care', routes.phoneCare);
app.get('/products/config-management-tool', routes.configManagementTool);
app.get('/products/migration-tool', routes.migrationTool);
app.get('/products/secure-sdn', routes.secureSdn);
app.get('/products/perfomance-monitoring', routes.perfomanceMonitoring);
app.get('/resources/infographics', routes.infoGraphics);
app.get('/resources/whitepapers', routes.whitePapers);
app.get('/resources/videos', routes.videos);
app.get('/resources/case-studies', routes.caseStudy);
app.get('/company/success-stories', routes.successStory);
app.get('/company/partners', routes.partners);
app.get('/services/managed-service', routes.managedService);
app.get('/services/app-development', routes.appService); 
app.get('/services/training-service', routes.training)
app.get('/company/careers', routes.openings); 
app.get('/careers/openings-details/:id', routes.jobOpeningsDetail); 
app.get('/company/press', routes.press);
app.get('/legal', routes.legal);

app.get('/error', function(req, res, next){
 	next(new Error('A contrived error'));
});

app.listen(3044);
console.log("App server running on port 3044");
