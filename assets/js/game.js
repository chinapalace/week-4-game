// hover effect on cards
$(".card").hover(
	function() {
	$(this).css("background-color", "whitesmoke");
	}, function(){
        $(this).css("background-color", "white");
	console.log("hover")
	});


$('p.card-text.body').text("100")


// player chooses character - populates enemy row with unchosen characters 
$(".card.text-center.choose").click(function() {
	$(this).appendTo(".row.battle")
	.removeClass('choose')
	.addClass('player');
	$('.card.text-center.choose').not(this)
		.appendTo('.row.enemies')
		.addClass('enemy')
		.removeClass('choose');
		$('.init-choose').remove();

	});

$('.card.text-center.enemy').click(function()	{
	$(this).appendTo('battle-enemy')
});
