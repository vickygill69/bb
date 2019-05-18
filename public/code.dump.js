<div>
<ButtonToolbar>
  <Button variant="success" size="lg" > <i className="fa fa-map-marker"></i> Entrega</Button>
  <Button variant="outline-secondary" size="lg"> <i className="fa fa-shopping-basket"></i> Recogida</Button>
</ButtonToolbar>
</div>

<FormControl>
    componentClass="input"
    placeholder="Enter recipe title"
    inputRef={(ref) => {this.input = ref}}
    defaultValue={title}/>
</FormControl>

onChange={event => this.setState({ value: event.target.value })}
----

componentDidMount: function() {
  this.refs.input.getValue(); //yolo
},
render: function() {
  return (
    <form >
      <Input ref="input" type="input" defaultValue="yolo"/>
    </form>
  );
  ---