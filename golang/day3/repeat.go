package iteration

func Repeat(character string, nums int) string {
	var repeated string
	for i := 0; i < nums; i++ {
		repeated = repeated + character
	}
	return repeated
}
